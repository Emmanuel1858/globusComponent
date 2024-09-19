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
  @Prop() currentPage: string = '1';
  @Prop() totalPages: string = '10';

  render() {
    return (
      <div class={`pagination_div`}>
        {this.type === 'card_minimal_right_aligned' && this.breakpoint === 'desktop' && (
          <>
            <div class="entries">
              <p>Entries</p>
              <input type="text" />
            </div>
            <div class="pages">
              Page {this.currentPage} of {this.totalPages}
            </div>
            <div class="buttons">
              <gb-button size="sm" hierarchy="secondary_gray" icon="default">
                <p>Previous</p>
              </gb-button>
              <gb-button size="sm" hierarchy="secondary_gray" icon="default">
                <p>Next</p>
              </gb-button>
            </div>
          </>
        )}
        {this.type === 'card_minimal_center_aligned' && this.breakpoint === 'desktop' && (
          <>
            <div class="prev">
              <gb-button size="sm" hierarchy="secondary_gray" icon="default">
                <p>Previous</p>
              </gb-button>
            </div>
            <div class="pages">
              Page {this.currentPage} of {this.totalPages}
            </div>
            <div class="next">
              <gb-button size="sm" hierarchy="secondary_gray" icon="default">
                <p>Next</p>
              </gb-button>
            </div>
          </>
        )}
      </div>
    );
  }
}