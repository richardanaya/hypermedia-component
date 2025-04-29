# HypermediaComponent

The `HypermediaComponent` is a custom HTML element designed to simplify the integration of hypermedia-driven content into web applications. It is especially useful when used alongside [HTMX](https://htmx.org/), which embraces hypermedia as the engine of application state.

This component fetches and embeds HTML fragments dynamically, enabling the creation of interactive and modular user interfaces with minimal JavaScript.

## Why Use HypermediaComponent with HTMX?

The `HypermediaComponent` complements HTMX by providing:

- **Decoupled Content**: Dynamically load external HTML fragments, promoting reuse and modularity.
- **Declarative Syntax**: Configure behavior through HTML attributes, reducing JavaScript complexity.
- **Enhanced Flexibility**: Customize HTTP methods, headers, form data, and credentials to suit various backend APIs.

## Installation

Include the script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/richardanaya/hypermedia-component/hypermedia-component.js"></script>
```

See the demo [here](https://richardanaya.github.io/hypermedia-component/)

## Attributes

## HypermediaComponent Attributes

| Attribute     | Type     | Required | Description                                                                 |
|---------------|----------|----------|-----------------------------------------------------------------------------|
| `src`         | `string` | ✅       | The URL to fetch the HTML fragment from.                                   |
| `credentials` | `string` | ❌       | Controls whether to send cookies 🍪 and credentials. Options: `include`, `same-origin`, `omit`. |
| `method`      | `string` | ❌       | HTTP method to use for the request (`GET`, `POST`, etc.). Defaults to `GET`.|
| `form-data`   | `string` | ❌       | JSON string representing form data to send in the body of a Non-GET, Non-DELETE request.  |
| `headers`     | `string` | ❌       | JSON string of custom headers to include in the request.                   |
| `mode`        | `string` | ❌       | The fetch mode (`cors`, `no-cors`, `same-origin`, `navigate`).             |


## Usage Examples

To use the `HypermediaComponent`, include the JavaScript file in your HTML and add the custom element with the required `src` attribute:

```html
<hypermedia-component src="./fragment.html"></hypermedia-component>
```

# Examples
Fetching Content with GET
This fetches the content of fragment.html using a GET request and embeds it into the component.

# Using Credentials

```html
<hypermedia-component 
  src="./secure-endpoint" 
  credentials="include">
</hypermedia-component>
```

This sets the credentials mode to include, allowing cookies and authentication headers to be sent with the request. The credentials attribute supports the following values:

include: Always send credentials (cookies, HTTP authentication, etc.) with the request.
same-origin: Only send credentials if the request is to the same origin as the document.
omit: Never send credentials with the request.


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

# Art

![Hypermedia Component](https://github.com/user-attachments/assets/ae57c52a-14af-481a-ae48-94fbc1a1f4d2)
