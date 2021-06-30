[![NSF-1928230](https://img.shields.io/badge/NSF-1928230-red.svg)](https://nsf.gov/awardsearch/showAward?AWD_ID=1928230)
[![nsidc](https://circleci.com/gh/nsidc/ros-animator-widget.svg?style=shield)](https://app.circleci.com/pipelines/github/nsidc/ros-animator-widget)


# Rain-on-Snow Event Animator Widget

This widget can really be used for any type of animation composed of discrete
images as frames.

This repo should be forked and renamed more generically if/when the API is more
sensible and stable. Solving the transfer mechanism problem is the main
blocker. Can we have all these behaviors if we transfer the imagery as a GIF,
for example?


## Level of Support

This repository is not actively supported by NSIDC but we welcome issue
submissions and pull requests in order to foster community contribution.


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
       data-animation="https://nsidc.org/ros-events/BanksIsland200310/manifest.json">
  </div>

  <p>...</p>

  <!-- UNPKG is a CDN in front of NPM -->
  <script src="https://unpkg.com/@nsidc/ros-animator-widget@0.6.0">
  </script>
</body>
```


### Parameters

#### `data-animation`

Required. Where to find the animation.


#### `data-controls-orientation`

Optional. Sets the location of the controls.

Possible values: `bottom`, `right`. Default: `bottom`

Example:
```
<div class="ros-animator-widget"
     data-animation="https://nsidc.org/ros-events/BanksIsland200310/manifest.json"
     data-controls-orientation="right">
```


## Contributing

### Releasing

To release:

* Update the `CHANGELOG.md` following the existing convention.
* Create a release commit with `npm version < major | minor | patch >`.
  * For a pre-release, use `npm version prerelease --preid=rc`.
* Push the new commit and tag.


## Roadmap

* Release as Web Component
* Use a more efficient/convenient transfer format. GIF?
