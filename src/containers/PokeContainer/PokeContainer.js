import React, { Component } from 'react'
import { shape, func, string } from 'prop-types' //PropTypes
import { connect } from 'react-redux'
import { sendTypeAction, sendClickedAction } from '../../actions/actionIndex'
import { getPokeType, getPokemon } from '../../api'
import { Loading } from '../../components/Loading/Loading'
import { Card } from '../../components/Card/Card'
import './PokeContainer.css'

export class PokeContainer extends Component {
  componentDidMount = async () => {
    const pokeType = await getPokeType()
    console.log('pokeType: ', pokeType)

    this.props.sendType(pokeType)
  }

  handleClick = async (id) => {
    const pokeOfType = this.props.pokeType[id -1].pokemon 
    console.log('pokeOfType: ', pokeOfType)

    this.props.sendClicked(id)
    // const poke = await getPokemon('1')
    // console.log('poke: ', poke)
  }

  generateCards = () => {
    return this.props.pokeType.map(type => {
      if (type.id === this.props.clicked) {
        return <div>ITS WORKING</div>
      } else {
        return (
          <Card 
            name={type.name}
            id={type.id}
            getPoke={this.handleClick}
          />
        )
      }
    })
  }

  render() {
    return (
      <div className="PokeContainer">
        <Loading />
        {
          this.props.pokeType &&
          <div className="pokemon">
            {this.generateCards()}
          </div>
        }
      </div>
    )
  }
}

PokeContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func //isRequired
}

export const mapState = state => ({ 
  pokeType: state.type,
  clicked: state.clicked,
})

export const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type)), 
  sendClicked: (id) => dispatch(sendClickedAction(id)),
})

export default connect(mapState, mapDispatch)(PokeContainer)
