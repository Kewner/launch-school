# Robot name

Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice.

## seedrandom

You must install the NPM package named `seedrandom` for these tests. Require and use `seedrandom` exactly as shown. This will override the built-in `Math.random` method so that it generates numbers that appear random in a predictable sequence. We need this feature to test certain aspects of the robot name generation.