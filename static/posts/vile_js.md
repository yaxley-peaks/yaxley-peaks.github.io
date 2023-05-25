---
layout: base.liquid
tags: post
ptitle: "Vile Js"
title: "Vile Javascript"
---
25/5/2023

# This is just vile

Found this bit of js in the wild

```js
let a = {
	i : 0,
	valueOf() {
		return this.i++;
	}
};

console.log(a == 0 && a == 1 && a == 2); // true
```

__**Wild!**__
