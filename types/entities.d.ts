
export interface Workout {
    id: number
    name: string
    date: string
    workouttype: string
    starttime: string
    distance: number
    duration: string
    averagehr: number | null
    maxhr: number | null
    notes: string | null
    summary: string | null
    boattype: string | null
    timezone: string
    forceunit: string
    inboard: number | null
    oarlength: number | null
    privacy: string
    rankingpiece: boolean
}
