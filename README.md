# Introduction

Safari has the unfortunate habit of keeping the focus in the location bar after
you search, which is really annoying if you use something like
[vimari](https://github.com/guyht/vimari) or the keyboard shortcuts available on
the Google results page. To get the focus on the main page, you have to either
click on it, hit ⌘F/escape or potentially many, many tabs.

Relinquish tries to solve this problem by automatically focusing the main page,
giving control back to you.

# Usage

Just install it.

Consider changing the Google search settings to *Never show Instant results*.

## Gory Details

Whenever you search from the location bar, the extension will look for an input
element containing the text you just searched for. That element will be focused
and blurred, which should defocus the location bar, leaving focus on the main
page. This will allow you to use keyboard controls to navigate the page, without
having to use one of the aforementioned workarounds.

# Author

[Marc Schwieterman](https://github.com/marcisme) ([@mschwieterman](https://twitter.com/mschwieterman))

# License

MIT License
