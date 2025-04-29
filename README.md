# Hypermedia Component

The `HypermediaComponent` is a custom HTML element designed to simplify the integration of hypermedia-driven content into your web applications. It is particularly useful when working with libraries like [HTMX](https://htmx.org/) that emphasize hypermedia as the engine of application state. This component allows you to fetch and embed HTML fragments dynamically, making it easier to build interactive and modular web applications.

## Why Use This Component with HTMX?

HTMX enables you to extend HTML with attributes for AJAX requests, WebSockets, and more. The `HypermediaComponent` complements HTMX by:

- **Decoupling Content**: Dynamically fetch and embed HTML fragments from external sources, keeping your HTML modular and reusable.
- **Declarative Syntax**: Use simple HTML attributes to configure the component, reducing the need for JavaScript.
- **Enhanced Flexibility**: Supports custom HTTP methods, headers, and form data, making it adaptable to various backend APIs.

## How to Use

### Basic Usage

To use the `HypermediaComponent`, include the JavaScript file in your HTML and add the custom element with the required `src` attribute:

```html
<script src="./hypermedia-component.js"></script>

<hypermedia-component src="./fragment.html"></hypermedia-component>

# Examples
Fetching Content with GET
This fetches the content of fragment.html using a GET request and embeds it into the component.

# Sending Form Data with POST

```html
<hypermedia-component 
  src="./submit-form" 
  method="POST" 
  form-data='{"name": "John", "age": 30}'>
</hypermedia-component>
```

This sends the form data as a POST request to ./submit-form and embeds the response.

# Adding Custom Headers
```html
<hypermedia-component 
  src="./api/data" 
  headers='{"Authorization": "Bearer token123"}'>
</hypermedia-component>
```
This includes an Authorization header in the request.

# Using Fetch Modes
```html
<hypermedia-component 
  src="./cors-endpoint" 
  mode="cors">
</hypermedia-component>
```
This sets the fetch mode to cors for cross-origin requests.

# Error Handling
The component logs errors to the console for invalid attributes, failed requests, or other issues. Ensure that the src URL is valid and accessible.

# Conclusion
The HypermediaComponent is a powerful tool for building modular, hypermedia-driven web applications. By combining it with HTMX, you can create dynamic and interactive user interfaces with minimal JavaScript. ``