function DropdownComponent(element) {
  'use strict';
  this.element_ = element;
  this.init();
}

DropdownComponent.prototype.CssClasses_ = {
  DROPDOWN_IS_ACTIVE: 'dropdown-is-active'
};

DropdownComponent.prototype.clickHandler = function(event) {
  "use strict";
  var target = event.target;
  if (!target.classList.contains(this.CssClasses_.DROPDOWN_IS_ACTIVE)) {
    target.classList.add(this.CssClasses_.DROPDOWN_IS_ACTIVE);
    target.nextElementSibling.classList.add(this.CssClasses_.DROPDOWN_IS_ACTIVE);
  } else {
    target.nextElementSibling.classList.remove(this.CssClasses_.DROPDOWN_IS_ACTIVE);
    target.classList.remove(this.CssClasses_.DROPDOWN_IS_ACTIVE);
  }
};

DropdownComponent.prototype.init = function() {
  "use strict";
  this.boundClickHandler = this.clickHandler.bind(this);
  this.element_.addEventListener('click', this.boundClickHandler);
};

DropdownComponent.prototype.mdlDowngrade_ = function() {
  "use strict";
    this.element_.removeEventListener('click', this.boundClickHandler);
};

componentHandler.register({
  constructor: DropdownComponent,
  classAsString: 'DropdownComponent',
  cssClass: 'component-js-dropdown'
});
