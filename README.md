# Dropdown Component

A quick dropdown system to be used with [Material Design Lite](http://getmdl.io).

WARNING: This is still very early.

## Usage

### To install the component

1. Reference `src/dropdown.js` in your markup so it will be included as a script.
2. Build MDL's Sass and add `src/dropdown.scss` after the rest of MDL.

### Within your page

1. Code an anchor to be the trigger for the dropdown. Give it the `component-js-dropdown` class to setup the dropdown menu. Also provided is a `dropdown-navigation__header` class that styles it like a normal menu item.

```html
    <a class="dropdown-navigation__header component-js-dropdown" title="Gaming">Gaming</a>
```

2. The *next child* in the DOM should be menu this trigger will target. This element contains the anchors for the menu.

```html
<div class="dropdown-navigation__menu">
    <a class="mdl-navigation__link" href="gaming/mtg" title="Magic: The Gathering">Magic: the Gathering</a>
    <a class="mdl-navigation__link" href="gaming/dnd" title="Dungeons & Dragons">Dungeons & Dragons</a>
</div>
```

Final code:

```html
<a class="dropdown-navigation__header component-js-dropdown" title="Gaming">Gaming</a>
<div class="dropdown-navigation__menu">
    <a class="mdl-navigation__link" href="gaming/mtg" title="Magic: The Gathering">Magic: the Gathering</a>
    <a class="mdl-navigation__link" href="gaming/dnd" title="Dungeons & Dragons">Dungeons & Dragons</a>
</div>
```
