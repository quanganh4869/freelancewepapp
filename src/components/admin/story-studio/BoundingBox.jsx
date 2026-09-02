import React, { useRef, useState, useEffect } from 'react';
import { useStoryEditor } from '../../../store/useStoryEditor';

export const BoundingBox = ({ layer, isSelected, children, canvasRef, sceneId }) => {
  const { selectLayer, updateLayer } = useStoryEditor();
  const boxRef = useRef(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0, startX: 0, startY: 0 });

  // Handle Dragging
  const handleMouseDown = (e) => {
    e.stopPropagation();
    selectLayer(layer.id);
    if (!canvasRef.current) return;
    
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      startX: layer.x || 0,
      startY: layer.y || 0
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !canvasRef.current) return;
      
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;
      
      // Convert pixel delta to percentage delta
      const percentDeltaX = (deltaX / canvasRect.width) * 100;
      const percentDeltaY = (deltaY / canvasRect.height) * 100;

      updateLayer(sceneId, layer.id, {
        x: dragStartPos.current.startX + percentDeltaX,
        y: dragStartPos.current.startY + percentDeltaY
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, layer.id, sceneId, updateLayer, canvasRef]);

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      className={\`absolute \${isSelected ? 'ring-2 ring-brand-primary cursor-move' : 'cursor-pointer hover:ring-1 ring-white/30'} \${layer.locked ? 'pointer-events-none' : ''}\`}
      style={{
        left: \`\${layer.x || 0}%\`,
        top: \`\${layer.y || 0}%\`,
        transform: \`translate(-50%, -50%) scale(\${layer.scale || 1}) rotate(\${layer.rotation || 0}deg)\`,
        opacity: layer.opacity !== undefined ? layer.opacity : 1,
        zIndex: layer.zIndex || 10,
        display: layer.visible === false ? 'none' : 'block'
      }}
    >
      {children}

      {/* Resize / Rotate handles could be added here in the future */}
      {isSelected && (
        <>
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-brand-primary rounded-sm pointer-events-auto cursor-nwse-resize" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-brand-primary rounded-sm pointer-events-auto cursor-nesw-resize" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-brand-primary rounded-sm pointer-events-auto cursor-nesw-resize" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-brand-primary rounded-sm pointer-events-auto cursor-nwse-resize" />
          {/* Rotate Handle */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-primary rounded-full pointer-events-auto cursor-grab" />
        </>
      )}
    </div>
  );
};
