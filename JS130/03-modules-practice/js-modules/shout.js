// exported
export function shoutGreeting(greeting, name) {
  name = name.slice(0, name.length - 1);
  console.log(`${greeting} ${name}!!!`.toUpperCase());
}
