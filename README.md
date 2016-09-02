# super-random

A neat (20 lines) asynchronous random number generator based on [supertask](https://en.wikipedia.org/wiki/Supertask).
Most of you have heard about the story of Achilles and the tortoise. Achilles will get the tortoise though there are infinite steps.

>Suppose that Achilles is the fastest runner, and moves at a speed of 1 m/s. Achilles chases a tortoise, an animal renowned for being slow, that moves at 0.1 m/s. However, the tortoise starts 0.9 metres ahead. Common sense seems to decree that Achilles will catch up with the tortoise after exactly 1 second, but Zeno argues that this is not the case. He instead suggests that Achilles must inevitably come up to the point where the tortoise has started from, but by the time he has accomplished this, the tortoise will already have moved on to another point. This continues, and every time Achilles reaches the mark where the tortoise was, the tortoise will have reached a new point that Achilles will have to catch up with; while it begins with 0.9 metres, it becomes an additional 0.09 metres, then 0.009 metres, and so on, infinitely.

What would happen if we start counting when the chase begins and add 1 every time Achilles reaches that mark?
(hint: use `then` method with `console.log` and you can see the final result)

## Installation

```sh
npm install super-random --save
```

## Usage

```javascript
const superRandom = require('super-random');
superRandom(1000).then(num => console.log(num));
```

