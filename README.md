## Some implementations of adding a blur placeholder to an external image in NextJS 14

- BlurredFillImage
- - Uses `getPlaiceholder` to retrieve a Base64 string; size is unspecified
- BlurredImage
- - Uses `getPlaiceholder` to retrieve a Base64 string; size MUST be specified
- BlurredTailwindImage
- - Uses TailwindCSS and `useState` to set custom blur styles for `isLoading` state; size is unspecified
- - Image doesn't appear on page load so it's best to add a background color or blur to the container
- - - I would change the blur animation to an opacity animation for less of a 'pop-in' effect
