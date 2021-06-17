# Rain-on-Snow Event Animator Widget

This widget can really be used for any type of animation composed of discrete
images as frames. This repo should be forked and renamed more generically
if/when the API is more sensible.


## TODO

- Decide on parameter format. Maybe:
  - URL to a `manifest.json` containing URLs to images
  - URL to a `.gif`
  - URL to a `.mp4`
  - URL to a spritesheet
  - Something else?

- Improve animation performance and consistency at high framerates.

- Deliver widget as a Web Component instead of using the usual React
  div-injection method?


## Usage

In HTML, include the script towards the bottom of your body tag. Place the app
by creating an element (usually a `<div>`) with class `ros-animator-widget`.
Pass in a URL to a `manifest.json` file as the `data-animation` attribute. The
`manifest.json` must contain an ordered list of paths (relative to the manifest
URL) to frames. *This API is not stable.*

Example:

```
<body>
  <p>...</p>
  <div class="ros-animator-widget"
       data-animation="https://example.com/path/to/animation/manifest.json">
  </div>

  <p>...</p>

  <script src="https://github.com/nsidc/ros-animator-widget/releases/download/v0.1.0/bundle.min.js">
  </script>
</body>
```
