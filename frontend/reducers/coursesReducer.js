
const course1 = {
    courseName : 'course1',
    from: 'July',
    to: 'Augest',
    startTime: new Date().getHours() + ' : ' + new Date().getMinutes()
    // + '  : ' + new Date().getMonth() + ' / ' +
    // new Date().getDate() + ' / ' + new Date().getUTCFullYear()

}
const course2 = {
    courseName : 'course2',
    from: 'July',
    to: 'Augest',
    startTime: new Date().getHours() + ' : ' + new Date().getMinutes()
}
const course3 = {
    courseName : 'course3',
    from: 'Aug',
    to: 'Nov',
    startTime: new Date().getHours() + ' : ' + new Date().getMinutes()
}
const courseArr = [];
courseArr.push(course1);
courseArr.push(course2);
courseArr.push(course3);
const coursesReducer = (state = courseArr, action ) => {

    switch (action.type) {
        default:
            return state;
    }

};

export default coursesReducer;
