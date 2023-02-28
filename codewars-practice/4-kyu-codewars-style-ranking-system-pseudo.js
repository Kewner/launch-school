// Write a class called User that is used to calculate the amount that
// a user will progress through a ranking system similar to the one
// Codewars uses.

// Business Rules:
// - A user starts at rank -8 and can progress all the way to 8.
// - There is no 0 (zero) rank. The next rank after -1 is 1.
// - Users will complete activities. These activities also have ranks.
// - Each time the user completes a ranked activity the users rank progress
//   is updated based off of the activity's rank
// - The progress earned from the completed activity is relative to what
//   the user's current rank is compared to the rank of the activity
// - A user's rank progress starts off at zero, each time the progress
//   reaches 100 the user's rank is upgraded to the next level
// - Any remaining progress earned while in the previous rank will be
//   applied towards the next rank's progress (we don't throw any progress
//   away). The exception is if there is no other rank left to progress
//   towards (Once you reach rank 8 there is no more progression).
// - A user cannot progress beyond rank 8.
// - The only acceptable range of rank values is
//   -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise
//   an error.

// The progress is scored like so:
// - Completing an activity that is ranked the same as that of the user's will be worth 3 points
// - Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
// - Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
// - Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.

// Logic Examples:
// - If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
// - If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
// - If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
// - If a user ranked -8 completes an activity ranked -4 they will receive 160 progress,
//   resulting in the user being upgraded to rank -7 and having earned 60 progress
//   towards their next rank
// - If a user ranked -1 completes an activity ranked 1 they will receive 10 progress
//   (remember, zero rank is ignored)

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(rank) {
    // - if rank is out of range, throw error
    // - initialize `difference` to rank difference
    // - initialize `progress` to getProgress(difference)
    // - add `progress` to this.progress

    // - if this.progress is 100 or more AND this.rank is less than 8:
    //     - initialize `rankIncrease` to Math.floor(this.progress / 100)
    //     - increment this.rank by `this.increaseRank(rankIncrease)`
    //     - if this.rank equals 0, increment by 1 again
    //     - subtract `rankIncrease * 100` from this.progress
    // - if this.rank equals or is greater than 8:
    //     - set this.rank to 8
    //     - set this.progress to 0

    if (rank < -8 || rank > 8 || rank === 0) {
      throw new Error('Not a valid rank!');
    }

    const difference = this.getDifference(this.rank, rank);
    const progress = this.getProgress(difference);
    this.progress += progress;

    if (this.progress >= 100 && this.rank < 8) {
      const rankIncrease = Math.floor(this.progress / 100);
      this.increaseRank(rankIncrease);
      this.progress -= (rankIncrease * 100);
    }

    if (this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
  }

  getDifference(currentRank, activityRank) {
    // - initialize `difference` with value of 0
    // - using a for loop, iterate from smallest to largest number:
    //     - if idx is not 0, increment difference by 1
    // - if currentRank is greater than activityRank, return difference * -1
    // - else, return difference

    let difference = 0;
    let smallest = Math.min(currentRank, activityRank);
    let largest = Math.max(currentRank, activityRank);

    for (let idx = smallest; idx < largest; idx += 1) {
      if (idx !== 0) difference += 1;
    }

    if (currentRank > activityRank) return difference * -1;
    return difference;
  }

  getProgress(difference) {
    // - if `difference` is 0, return 3
    // - else if `difference` is -1, return 1
    // - else if `difference` is greater than 0, return 10 * difference * difference
    // - else, return 0

    if (difference === 0) return 3;
    if (difference === -1) return 1;
    if (difference > 0) return 10 * difference * difference;
    return 0;
  }

  increaseRank(increase) {
    for (let idx = 0; idx < increase; idx += 1) {
      this.rank += 1;
      if (this.rank === 0) this.rank += 1;
    }
  }
}

// Examples:
const user = new User();
console.log('user.rank: ' + user.rank); // -8
console.log('user.progress: ' + user.progress); // 0

user.incProgress(1);
console.log('user.rank: ' + user.rank); // -2
console.log('user.progress: ' + user.progress); // 40

user.incProgress(2);
console.log('user.rank: ' + user.rank); // -1
console.log('user.progress: ' + user.progress); // 30

user.incProgress(4);
console.log('user.rank: ' + user.rank); // 1
console.log('user.progress: ' + user.progress); // 90

// user.incProgress(-7);
// console.log('user.progress: ' + user.progress); // 10
// console.log('user.rank: ' + user.rank); // -8

// user.incProgress(-5); // will add 90 progress
// console.log('user.progress: ' + user.progress); // progress is now 0
// console.log('user.rank: ' + user.rank); // rank was upgraded to -7
