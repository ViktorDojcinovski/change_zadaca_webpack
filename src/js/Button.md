## Create a modular JavaScript program that models UI elements, specifically a generic UI element (UIElement) and a more specific UI element, a button (Button), using inheritance.

1. UIElement Class:

# Create a UIElement class representing a generic UI element.

# The class should have a constructor that takes a selector parameter and sets an element property by querying the DOM using the selector.

# Implement methods show and hide to set the display property of the element.

```javascript
class UIElement {
  constructor(selector) {
    // Set the 'element' property by querying the DOM using the selector
  }
  show() {
    // Set the display property of 'element' to 'block'
  }
  hide() {
    // Set the display property of 'element' to 'none'
  }
}
```

2. Button Class (Inherits from UIElement):

# Create a Button class that inherits from UIElement.

# The Button class should have a constructor that takes a selector parameter and an onClick callback.

# Use the super keyword to call the constructor of the base class (UIElement).

# Add methods disable and enable to set the 'disabled' attribute of the button.

```javascript
class Button extends UIElement {
  constructor(selector, onClick) {
    // Call the constructor of the base class (UIElement) using 'super'
    // Add an event listener for the 'click' event with the provided 'onClick' callback
  }
  disable() {
    // Set the 'disabled' attribute of the button to 'true'
  }
  enable() {
    // Remove the 'disabled' attribute from the button
  }
  addClassList() {
    // Add list of classes to the button
  }
}
```

3. Usage:

# Create instances of both UIElement and Button classes.

# Use the methods to show/hide and enable/disable the elements.

# Integrate the Button class for creating new UI elements (buttons) through the class that you have created, inside createDomElements and init methods in the Carousel class.
