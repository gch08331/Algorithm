function solution(numbers) {
    var answer = 0;
    var length = numbers.length;
    var sum = 0;

    for (var i = 0; i < length; i++) {
        sum += numbers[i];
    }

    answer = sum / length;
    return answer;
}