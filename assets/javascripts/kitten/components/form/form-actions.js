import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export const FormActions = props => {
  const { className, children, spreadOutAt, ...others } = props
  const formActionsClassName = classNames(
    'k-FormActions',
    className,
    {
      [`k-FormActions--spreadOut@${spreadOutAt}`]: spreadOutAt,
    },
  )

  return (
    <div { ...props } className={ formActionsClassName } { ...others } />
  )
}

FormActions.Item = props => {
  return (
    <div
      { ...props }
      className={ classNames('k-FormActions__item', props.className) }
    />
  )
}

FormActions.propTypes = {
  spreadOutAt: PropTypes.oneOf(['s-up']),
}

FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null,
}

FormActions.Item.defaultProps = {
  className: null,
  children: null,
}
