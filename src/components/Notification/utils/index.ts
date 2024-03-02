const users = ["Anderson Roque", "Robert Fox", "Taylor Swift", "Will Smith"];
const messages = [
  "Improve workflow in Figma",
  "Create new components",
  "Improve workflow in React",
  "Create new Route",
];

function notificationRandom() {
  const usersRandom = Math.floor(Math.random() * users.length);
  const messageRandom = Math.floor(Math.random() * messages.length);

  return {
    name: users[usersRandom],
    message: messages[messageRandom],
    avatar:
      "https://images.unsplash.com/photo-1682685794761-c8e7b2347702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3NTR8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTI5OTQxNHw&ixlib=rb-4.0.3&q=80&w=400",
    time: "",
  };
}

export { notificationRandom };
