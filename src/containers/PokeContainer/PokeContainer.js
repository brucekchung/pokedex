import React, { Component } from 'react'
import { shape, func, string, arrayOf, object } from 'prop-types' //PropTypes
import { connect } from 'react-redux'
import { sendTypeAction, sendClickedAction, sendDetailAction } from '../../actions/actionIndex'
import { getPokeType, getPokemon } from '../../api'
import { Loading } from '../../components/Loading/Loading'
import { Card } from '../../components/Card/Card'
import { Detail } from '../../components/Detail/Detail'
import './PokeContainer.css'

export class PokeContainer extends Component {
  componentDidMount = async () => {
    const pokeType = await getPokeType()

    this.props.sendType(pokeType)
  }

  handleClick = async (id) => {
    const pokeOfType = this.props.pokeType[id -1].pokemon 
    const mappedPoke = pokeOfType.map(poke => getPokemon(poke))
    const pokeData = await Promise.all(mappedPoke)

    this.props.sendDetail(pokeData)
    this.props.sendClicked(id)
  }

  toggle = (id) => {
    if (this.props.clicked === id) {
      this.props.sendClicked(null)
    }
  }

  generateCards = () => {
    return this.props.pokeType.map(type => {
      if (type.id === this.props.clicked) {
        return (
          <Detail 
            detail={this.props.detail} 
            name={type.name} 
            id={type.id}
            key={type.id}
            toggle={this.toggle} />
        )
      } else {
        return (
          <Card 
            name={type.name}
            id={type.id}
            key={type.id}
            getPoke={this.handleClick}
          />
        )
      }
    })
  }

  render() {
    return (
      <div className="PokeContainer">
        {
          !this.props.pokeType &&
          <Loading />
        }
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
  // fake: shape({ fake: string }),
  // fakeAction: func //isRequired
  pokeType: arrayOf(object)
}

export const mapState = state => ({ 
  pokeType: state.type,
  clicked: state.clicked,
  detail: state.detail,
})

export const mapDispatch = dispatch => ({ 
  sendType: (type) => dispatch(sendTypeAction(type)), 
  sendClicked: (id) => dispatch(sendClickedAction(id)),
  sendDetail: (poke) => dispatch(sendDetailAction(poke))
})

export default connect(mapState, mapDispatch)(PokeContainer)
