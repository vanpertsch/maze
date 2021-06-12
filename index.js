const {Engine, Render,Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const{ world } = engine;
const render = Render.create({
  element: document.getElementById("maze"),
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,
    background: "white",
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
  }));

//walls
const walls = [
  Bodies.rectangle(400,0,800,40, {isStatic: true, }),
  Bodies.rectangle(400,600,800,40, {isStatic: true}),
  Bodies.rectangle(0,300,40,600, {isStatic: true}),
  Bodies.rectangle(800,300,40,600, {isStatic: true})
]

World.add(world, walls);

//Random shapes
const shapes = [
  Bodies.rectangle(200, 160, 60, 60, ),
  Bodies.rectangle(100, 220, 40, 40),
  Bodies.rectangle(300, 180, 45, 45),
  Bodies.rectangle(400, 200, 50, 50),
];

World.add(world, shapes);
