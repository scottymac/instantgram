# [instantgram]
![GitHub release](https://img.shields.io/github/release/theus/instantgram.svg)

![badge](https://img.shields.io/badge/for-instagram-yellow.svg?style=flat-square)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

[Versão em Português =)](http://theus.github.io/instantgram/lang/pt-br)

[instantgram] is a bookmarklet with the purpose of downloading Instagram images. It is tiny, simple, and doesn't require extensions or downloads. Just access [this link][1] and drag the [instantgram] button to the bookmark bar of your browser, navigate to instagram.com (web), open an Instagram post (photo) and click on the bookmarklet. That's all it takes!

### [:arrow_right: Bookmarklet][1]

![gif demo](img/demo.gif)

:bulb: Now in version 2.1.0, [instantgram] can search images on screen. When scrolling through your timeline, stop on the image that you want and click on the [instantgram] bookmarklet. It should work.

## Compatibility

|       Browser        |     Compatible?    |
| -------------------- | -------------------|
| Google Chrome        | :white_check_mark: |
| Mozilla Firefox      | :white_check_mark: |
| Internet Explorer 11 | :white_check_mark: |
| Edge*                | :warning:          |
*_apparently Edge doesn't allow you to drag a button to the bookmark bar_

## Roadmap

- ~~a way of notify updates in [instantgram]~~ :heavy_check_mark: in v2.0.0
- ~~make a gif explaining the [instantgram]~~ :heavy_check_mark:
- ~~video :smirk_cat:~~ :heavy_check_mark: in v2.2.0

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for more information. :heart:

## Changelog
- v2.4.0 - [instangram] now supports Stories.
- v2.3.0 - [instangram] now supports localization, both app and website. Initially it has en-US and pt-BR. You can help us translate [instantgram] for your language! Cool? Read [contributing](CONTRIBUTING.md) for more information.
- v2.2.0 - [instantgram] now supports video too! :movie_camera:
- After v2.0.0, [instantgram] has your data saved in `localStorage` and can be accessed entering `localStorage.getItem('instantgram')` in console inside instagram.com. If you can't access this item, you may be using a version before v2.0.0.


[1]:http://theus.github.io/instantgram

run build:bookmarklet && npm run build:pages