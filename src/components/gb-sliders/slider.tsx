import { Component, Prop, State, Event, EventEmitter, h, Element } from '@stencil/core';

@Component({
  tag: 'gb-slider',
  styleUrl: 'slider.css',
  shadow: true,
})
export class GbSlider {
  @Element() el: HTMLElement;

  @Prop() min: number = 0;  
  @Prop() max: number = 100; 
  @Prop() thumbType: 'text' | 'tooltip' = 'text'; 

  @State() leftValue: number = 0;   
  @State() rightValue: number = 100; 

  @Event() valueChange: EventEmitter<{ left: number; right: number }>;

  private trackEl: HTMLDivElement; 
  private containerEl: HTMLDivElement; 
  private isDragging: boolean = false; 
  private activeThumb: 'left' | 'right' | null = null;

  private snapPoints = [0, 25, 50, 75, 100];

  componentDidLoad() {
    this.trackEl = this.el.shadowRoot.querySelector('.track');
    this.containerEl = this.el.shadowRoot.querySelector('.slider-container');
    this.updateTrack(); 
  }

  handleMouseDown = (_e: MouseEvent, thumb: 'left' | 'right') => {
    this.isDragging = true;
    this.activeThumb = thumb; 
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) return; 

    // Calculate the position of the mouse relative to the slider's width.
    const position = e.offsetX / this.containerEl.offsetWidth;
    
    // Convert the position into a value within the slider's range and snap to the nearest point.
    const value = this.findNearestSnapPoint(position * 100);

    // Update the appropriate thumb's value.
    if (this.activeThumb === 'left') {
      this.leftValue = Math.min(value, this.rightValue - 25);
    } else {
      this.rightValue = Math.max(value, this.leftValue + 25);
    }

    // Update the track's appearance and emit the new values.
    this.updateTrack();
    this.valueChange.emit({ left: this.leftValue, right: this.rightValue });
  }

  handleMouseUp = () => {
    this.isDragging = false; 
    this.activeThumb = null; 
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  findNearestSnapPoint(value: number): number {
    return this.snapPoints.reduce((prev, curr) => 
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
  }

  updateTrack() {
    const leftPos = this.leftValue; 
    const rightPos = this.rightValue; 
    
    // Update the track's left position and width to match the thumb positions.
    this.trackEl.style.left = `${leftPos}%`;
    this.trackEl.style.width = `${rightPos - leftPos}%`;
  }

  render() {
    return (
      <div class="slider-container" ref={(el) => this.containerEl = el as HTMLDivElement}>
        <div class="track" ref={(el) => this.trackEl = el as HTMLDivElement}></div>
        
        <gb-slider-control-handle 
          class="left"
          value={this.leftValue}
          type={this.thumbType}
          style={{ left: `${this.leftValue}%` }}
          onMouseDown={(e) => this.handleMouseDown(e, 'left')}
        ></gb-slider-control-handle>

        <gb-slider-control-handle 
          class="right"
          value={this.rightValue}
          type={this.thumbType}
          style={{ left: `${this.rightValue}%` }}
          onMouseDown={(e) => this.handleMouseDown(e, 'right')}
        ></gb-slider-control-handle>
      </div>
    );
  }
}
