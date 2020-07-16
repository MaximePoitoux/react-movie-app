import React from 'react'
import axios from 'axios'

class FormMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      poster: '',
      comment: ''
    }
  }

  onChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const url = ('https://post-a-form.herokuapp.com/api/movies/')
    axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Movie ajouté avec l'ID ${res.id}`)
      })
      .catch(e => {
        console.error(e)
        alert(`Problème d'ajout du film : ${e.message}`)
      })
  }

  render() {
    return(
      <div className="FormEmployee">
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Add your movie !</legend>

            <div className='form-data'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                id='title'
                name='title'
                value={this.state.title}
                onChange={this.onChange}
              >
              </input>
            </div>

            <div className='form-data'>
              <label htmlFor="poster">Poster</label>
              <input
                type='text'
                id='poster'
                name='poster'
                value={this.state.poster}
                onChange={this.onChange}
              >
              </input>
            </div>

            <div className='form-data'>
              <label htmlFor="comment">Comment</label>
              <textarea
                id='comment'
                name='comment'
                value={this.state.comment}
                onChange={this.onChange}
              >
              </textarea>
            </div> 

            <div className='form-data'>
              <input type='submit' value='Send'></input>
            </div>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormMovie