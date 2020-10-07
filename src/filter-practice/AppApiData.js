import React, { Component } from 'react';

class AppApiData extends Component {
    state = {
        filter: '',
        lessons: []
    }

    componentDidMount() {
        this.fetchLessons();
    }
    onChangeFilter = e => {
        const filter = e.target.value
        this.setState({ filter }, this.fetchLessons);
    }

    fetchLessons = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            const { filter } = this.state;
            fetch(`http://localhost:3001/api/lessons?filter=${filter}`)
                .then(rs => rs.json())
                .then(lessons => this.setState({ lessons }))
        }, 300) //debounce

    }

    render() {
        const { filter, lessons } = this.state
        const visibleLessons = lessons.filter(lesson => (
            lesson.title.toLocaleLowerCase().includes(filter.toLowerCase())
        ))
        return (
            <div>
                <input value={filter} onChange={this.onChangeFilter} />
                <ul>
                    {visibleLessons.map(lesson => (
                        <li key={lesson.id}>{lesson.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AppApiData;