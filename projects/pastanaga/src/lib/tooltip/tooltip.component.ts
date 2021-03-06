import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

const VERTICAL_SEPARATION = 21;
const VERTICAL_SEPARATION_ACTION = 3;
const HORIZONTAL_SEPARATION = -3;

@Component({
    selector: 'pa-tooltip-element',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements AfterViewInit {
    @Input() text?: string;
    @Input() id?: string;

    isAction = false;
    height = 0;
    width = 0;
    left = 0;
    top = 0;

    @ViewChild('tooltipText') tooltipText?: ElementRef;

    ngAfterViewInit() {
        this.show();
    }

    show() {
        if (this.tooltipText) {
            this.tooltipText.nativeElement.style.left = this.getLeftPosition() + 'px';
            this.tooltipText.nativeElement.style.top = this.getTopPosition() + 'px';
            this.adjustPosition(); // once position set, check if too far horizontally or vertically
            this.tooltipText.nativeElement.setAttribute('aria-expanded', true);
        }
    }

    hide() {
        if (this.tooltipText) {
            this.tooltipText.nativeElement.setAttribute('aria-expanded', false);
        }
    }

    private getLeftPosition(): number {
        if (this.isAction && !!this.tooltipText) {
            const tooltipWidth = this.tooltipText.nativeElement.offsetWidth;
            return this.left + (this.width / 2) - (tooltipWidth / 2);
        } else {
            return this.left + HORIZONTAL_SEPARATION;
        }
    }

    private getTopPosition(): number {
        if (this.isAction) {
            return this.top + this.height + VERTICAL_SEPARATION_ACTION;
        } else {
            return this.top + VERTICAL_SEPARATION;
        }
    }

    private adjustPosition() {
        if (!!this.tooltipText) {
            const rect = this.tooltipText.nativeElement.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                let left: number = parseInt(this.tooltipText.nativeElement.style.left.replace('px', ''), 10);
                left = left - (rect.right - window.innerWidth) - HORIZONTAL_SEPARATION;
                this.tooltipText.nativeElement.style.left = left + 'px';
            }
            if (rect.bottom > window.innerHeight) {
                let top: number = parseInt(this.tooltipText.nativeElement.style.top.replace('px', ''), 10);
                top = top - (rect.bottom - window.innerHeight) - VERTICAL_SEPARATION;
                this.tooltipText.nativeElement.style.top = top + 'px';
            }
        }
    }
}
