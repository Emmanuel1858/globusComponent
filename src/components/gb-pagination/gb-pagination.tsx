import { Component, Prop, h, Fragment } from "@stencil/core";
import { BreakPoints, PaginationNumberShapes, PaginationTypes } from "../../models/reusableModels";

@Component({
  tag: 'gb-pagination',
  styleUrl: 'gb-pagination.css',
  shadow: true,
})
export class GbPagination {
  @Prop() type: PaginationTypes;
  @Prop() shape: PaginationNumberShapes;
  @Prop() breakpoint: BreakPoints;
  @Prop() currentPage: number = 1;
  @Prop() totalPages: number = 10;

  render() {
    return (
      <div class={`pagination_div ${this.type} ${this.breakpoint}`}>
        {/* Desktop Breakpoint Pagination */}
        {this.type === 'page_default' && this.breakpoint === 'desktop' && (
          <>
            <gb-button size="sm" hierarchy="tertiary_gray" icon="default" state="default" icon-leading={true} icon-leading-swap="assets/arrow-left-02.svg">
              <p>Previous</p>
            </gb-button>

            {/* <div class="page_default_numbers">
              <gb-pagination-number-base shape={this.shape}></gb-pagination-number-base>
            </div> */}

            <gb-button size="sm" hierarchy="tertiary_gray" icon="default" state="default" icon-trailing={true} icon-trailing-swap="assets/arrow-right-02.svg">
              <p>Next</p>
            </gb-button>
          </>
        )}
        {this.type === 'page_minimal_center_aligned' && this.breakpoint === 'desktop' && (
          <>
            <gb-button size="sm" hierarchy="secondary_gray" icon="default" state="default" icon-leading={true} icon-leading-swap="assets/arrow-left-02.svg">
              <p>Previous</p>
            </gb-button>

            <gb-button size="sm" hierarchy="secondary_gray" icon="default" state="default" icon-trailing={true} icon-trailing-swap="assets/arrow-right-02.svg">
              <p>Next</p>
            </gb-button>
          </>
        )}
        {this.type === 'card_default' && this.breakpoint === 'desktop' && (
          <>
            <div class="entries">
              Entries
            </div>
            <div class="page_numbers"></div>
            <div class="buttons">
              <gb-button size="sm" hierarchy="secondary_gray" icon="only" state="default" icon-leading={true} icon-leading-swap="assets/arrow-left-02.svg"></gb-button>
              <gb-button size="sm" hierarchy="secondary_gray" icon="only" state="default" icon-leading={true} icon-leading-swap="assets/arrow-right-02.svg"></gb-button>
            </div>
          </>
        )}

        {/* Mobile Breakpoint Pagination */}
        {this.type === 'page_default' && this.breakpoint === 'mobile' && (
          <>
            <gb-button size="sm" hierarchy="secondary_gray" icon="only" state="default" icon-leading={true} icon-leading-swap="assets/arrow-left-02.svg"></gb-button>
            <div class="page_number_text">
              <p class="text-sm-medium">
                Page {this.currentPage} of {this.totalPages}
              </p>
            </div>
            <gb-button size="sm" hierarchy="secondary_gray" icon="only" state="default" icon-leading={true} icon-leading-swap="assets/arrow-right-02.svg"></gb-button>
          </>
        )}
      </div>
    );
  }
}