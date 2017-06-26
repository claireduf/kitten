import React from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'

export class Tooltip extends React.Component {
  renderArrow() {
    const style = {}

    return (
      <span style={ style } className="k-Tooltip__arrow" />
    )
  }

  render() {
    const { children,
            className,
            arrowLeftPosition,
            ...others } = this.props

    const tooltipClassName = classNames(
      'k-Tooltip',
      className,
    )

    return (
      <div className={ tooltipClassName } { ...others }>
        <Marger top="2" bottom="2">
          { children }
          { this.renderArrow() }
        </Marger>
      </div>
    )
  }
}

Tooltip.defaultProps = {
  arrowLeftPosition: "50%",
}