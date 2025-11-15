// src/components/GlassmorphicCard.js
import React from 'react';
import '../css/GlassmorphicCard.css';

function GlassmorphicCard({
  backgroundImage,
  style,
  image,
  title,
  subtitle,
  children,
  // Additional props we need
  content,
  description,
  facts,
  additionalInfo,
  compact = false
}) {
  return (
    <div 
      className={`glass-card ${compact ? 'compact' : ''}`}
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        ...style 
      }}
    >
      <div className="glass-card-content">
        {image && (
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="card-text">
          <h3>{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          
          {/* Main description */}
          {description && (
            <div className="card-description">
              {description}
            </div>
          )}
          
          {/* Additional content */}
          {content && <p className="content-text">{content}</p>}
          
          {/* Additional info/highlights */}
          {additionalInfo && (
            <div className="additional-info">
              <strong>Highlight:</strong> {additionalInfo}
            </div>
          )}
          
          {/* Facts section */}
          {facts && facts.length > 0 && (
            <div className="facts-section">
              <h4>Key Facts:</h4>
              <ul>
                {facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}

export default GlassmorphicCard;