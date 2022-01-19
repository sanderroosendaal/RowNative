import {Workout} from "./entities";

export interface WorkoutDetailsRoute {
  key: string
  name: string
  params: {
    item: Workout
  }
}
