class HypermediaComponent extends HTMLElement {
  constructor() {
    super();
    this.wasAttached = false;
  }

  // on attach
  connectedCallback() {
    if (this.wasAttached) return;
    this.wasAttached = true;

    const url = this.getAttribute("src");
    if (!url) {
      console.error("No URL provided for hypermedia component");
      return;
    }

    const method = this.getAttribute("method") || "GET";

    // check if the url is absolute
    const isAbsoluteUrl = (url) => {
      return /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    };

    // if the url is not absolute, make it absolute
    if (!isAbsoluteUrl(url)) {
      const baseUrl = window.location.origin;
      const path = window.location.pathname;
      const absoluteUrl = new URL(url, baseUrl + path);
      url = absoluteUrl.href;
    }

    // check if the url is a valid URL
    try {
      new URL(url);
    } catch (e) {
      console.error("Invalid URL provided for hypermedia component");
      return;
    }

    // check if the url is a valid method
    if (!["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      console.error("Invalid method provided for hypermedia component");
      return;
    }

    // headers
    const headers = this.getAttribute("headers");
    if (headers) {
      try {
        const parsedHeaders = JSON.parse(headers);
        for (const [key, value] of Object.entries(parsedHeaders)) {
          this.setAttribute(key, value);
        }
      } catch (e) {
        console.error("Invalid headers provided for hypermedia component");
        return;
      }
    }

    // form data
    const formData = this.getAttribute("form-data");
    if (formData) {
      try {
        const parsedFormData = JSON.parse(formData);
        for (const [key, value] of Object.entries(parsedFormData)) {
          this.setAttribute(key, value);
        }
      } catch (e) {
        console.error("Invalid form data provided for hypermedia component");
        return;
      }
    }

    if (formData && method === "GET") {
      // if the method is GET, append the form data to the url
      const urlObj = new URL(url);
      Object.entries(formData).forEach(([key, value]) => {
        urlObj.searchParams.append(key, value);
      });
      url = urlObj.href;
      return;
    }

    // mode
    const mode = this.getAttribute("mode") || undefined;
    if (!["cors", "no-cors", "same-origin"].includes(mode)) {
      console.error("Invalid mode provided for hypermedia component");
      return;
    }

    // get the url as HTML and put it in the innerHTML
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "text/html",
        Accept: "text/html",
        ...headers,
      },
      mode,
      body: method === "POST" ? JSON.stringify(formData) : null,
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        this.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error fetching hypermedia component:", error);
      });
  }
}
customElements.define("hypermedia-component", HypermediaComponent);
