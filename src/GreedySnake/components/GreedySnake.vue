<template>
  <div class="box">
    <div class="flex-x" v-for="i in h" :key="i">
      <div
        class="grid"
        v-for="j in w"
        :key="j"
        :class="{snake:IsSnake(i-1,j-1),head:IsHead(i-1,j-1),food:IsFood(i-1,j-1)}"
        :style="{width:GridSize+'px',height:GridSize+'px'}"
      ></div>
    </div>
    <span>Width:</span>
    <input type="number" v-model.number="w">
    <span>Height:</span>
    <input type="number" v-model.number="h">
    <br>
    <span>Size:</span>
    <input type="number" v-model.number="GridSize">
    <span>Speed:</span>
    <input type="number" v-model.number="Speed">
  </div>
</template>

<script>
import { log } from "util";
export default {
  props: ["width", "height"],
  data() {
    return {
      w: parseInt(this.width),
      h: parseInt(this.height),
      direction: 1,
      nextdirection: 1,
      Snake: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
      NowFood: { x: 0, y: 0 },
      Score: 0,
      GridSize: 40,
      Speed: 5
    };
  },
  methods: {
    Go() {
      this.direction = this.nextdirection;
      switch (this.direction) {
        case 1: //right
          var temp = {
            x: this.Snake[this.Snake.length - 1].x + 1,
            y: this.Snake[this.Snake.length - 1].y
          };
          if (temp.x >= this.w) {
            temp.x = 0;
          }
          break;
        case 2: //down
          var temp = {
            x: this.Snake[this.Snake.length - 1].x,
            y: this.Snake[this.Snake.length - 1].y + 1
          };
          if (temp.y >= this.h) {
            temp.y = 0;
          }
          break;
        case 3: //left
          var temp = {
            x: this.Snake[this.Snake.length - 1].x - 1,
            y: this.Snake[this.Snake.length - 1].y
          };
          if (temp.x < 0) {
            temp.x = this.w - 1;
          }
          break;
        case 4: //up
          var temp = {
            x: this.Snake[this.Snake.length - 1].x,
            y: this.Snake[this.Snake.length - 1].y - 1
          };
          if (temp.y < 0) {
            temp.y = this.h - 1;
          }
          break;
      }
      if (this.Snake.some(item => item.x === temp.x && item.y === temp.y)) {
        alert(`GameOver Score:${this.Score}`);
        this.Score = 0;
        this.Snake = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
      }
      if (temp.x === this.NowFood.x && temp.y === this.NowFood.y) {
        this.Score++;
        this.GenerateFood();
      } else {
        this.Snake.splice(0, 1);
      }
      this.Snake.push(temp);
      setTimeout(() => this.Go(), 1000 / this.Speed);
    },
    IsSnake(i, j) {
      return this.Snake.some(
        (item, index, array) => item.x === j && item.y === i
      );
    },
    IsHead(i, j) {
      return (
        this.Snake[this.Snake.length - 1].x === j &&
        this.Snake[this.Snake.length - 1].y === i
      );
    },
    IsFood(i, j) {
      return this.NowFood.x === j && this.NowFood.y === i;
    },
    GenerateFood() {
      var food = {
        x: this.getRandom(0, this.w - 1),
        y: this.getRandom(0, this.h - 1)
      };
      while (
        this.Snake.some(
          (item, index, array) => item.x === food.x && item.y === food.y
        )
      ) {
        food = {
          x: this.getRandom(0, this.w - 1),
          y: this.getRandom(0, this.h - 1)
        };
      }
      this.NowFood = food;
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    keyFunction() {
      //39 40 37 38
      switch (event.keyCode) {
        case 39:
          if (this.direction != 3) {
            this.nextdirection = 1;
          }
          break;
        case 40:
          if (this.direction != 4) {
            this.nextdirection = 2;
          }
          break;
        case 37:
          if (this.direction != 1) {
            this.nextdirection = 3;
          }
          break;
        case 38:
          if (this.direction != 2) {
            this.nextdirection = 4;
          }
          break;
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    // document.addEventListener("keydown", this.keyFunction);
    // document.onkeydown = this.keyFunction;
    document.addEventListener("keydown", this.keyFunction);
    this.GenerateFood();
  },
  mounted() {
    setTimeout(() => this.Go(), 200);
  }
};
</script>
<style lang="scss" scoped>
.flex-x {
  display: flex;
  flex-direction: row;
}
.flex-y {
  display: flex;
  flex-direction: column;
}
.grid {
  // width: 40px;
  // height: 40px;
  background-color: rgb(255, 253, 161);
  // border: 1px;
  // border-style: solid;
  // border-color: rgb(62, 48, 255);
}
.snake {
  background-color: rgb(147, 53, 235);
}
.head {
  background-color: rgb(111, 0, 255);
}
.food {
  background-color: rgb(23, 243, 41);
}
</style>
