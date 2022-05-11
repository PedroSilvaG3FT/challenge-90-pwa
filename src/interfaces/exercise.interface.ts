export interface ExerciseDayInterface {
    name: string
    dayId: string
    numberDay: number
    exercices: ExerciseInterface[]
}

export interface ExerciseInterface {
    isLink: boolean
    linkUrl: string
    amount: string | number
    exercice: { id: number; name: string }
}
