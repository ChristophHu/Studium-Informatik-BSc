import { Component, Input } from '@angular/core'

export const normalizeSize = (size: number | string) => (parseFloat(size.toString()).toString() === size.toString() ? `${size}px` : size.toString())

@Component({
    template: ''
})
export abstract class SpinnerComponent {
    @Input() color = '#037bfc'
    @Input() secondaryColor = 'rgba(0,0,0,0.05)'
    @Input() enabled = true
    @Input() size: number | string = 50
    @Input() speed = 100
    @Input() still = false
    @Input() styles = {}
    @Input() thickness = 160

    get svgStyle() {
        return {
            color: this.color,
            overflow: 'visible',
            width: normalizeSize(this.size),
            height: normalizeSize(this.size),
            ...(typeof this.styles === 'string' ? JSON.parse(this.styles) : this.styles)
        }
    }
}