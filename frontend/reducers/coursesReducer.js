
const course1 = {
    courseName : 'French Cusin',
    from: 'Jun 22',
    to: 'Jul 23',
    startTime: new Date().getHours() + ' : ' + new Date().getMinutes()
    // + '  : ' + new Date().getMonth() + ' / ' +
    // new Date().getDate() + ' / ' + new Date().getUTCFullYear()

}
const course2 = {
    courseName : 'Fashion Design',
    from: 'Aug 13',
    to: 'Aug 15',
    startTime: new Date().getHours() + ' : ' + new Date().getMinutes()
}
const course3 = {
    courseName : 'British Literature',
    from: 'Sep 9',
    to: 'Nov 23',
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
