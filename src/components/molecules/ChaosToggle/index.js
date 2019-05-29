/* @jsx jsx */
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import activeBug from "../../../assets/active-virus.svg";
import bug from "../../../assets/clean-virus.svg";

const propTypes = {
  toggleChaos: PropTypes.func,
  theme: PropTypes.instanceOf(Object),
  active: PropTypes.string
};

const defaultProps = {
  toggleChaos: () => {},
  theme: { mixins: {}, layout: {}, colors: {} },
  active: null
};

const ChaosToggle = props => {
  // Define open or closed state
  const [open, toggleOpen] = useState(false);
  // Define styles
  const { theme, active, toggleChaos } = props;

  const classes = {
    chaosToggle: css(
      (() => ({
        position: "relative",
        height: "50px",
        padding: "0 20px",
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center"),
        ...theme.mixins.justifyContent("space-between")
      }))()
    ),

    trigger: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.alignItems("center"),
        cursor: "pointer",
        "> img": {
          width: "54px"
        }
      }))()
    ),

    icons: css(
      (() => ({
        ...theme.mixins.flexDisplay(),
        ...theme.mixins.flexDirection("column"),
        position: "absolute",
        top: "54px",
        height: "0",
        overflow: "hidden",
        padding: "0",
        border: "0 solid rgba(0, 0, 0, 0.39)",
        left: "9px",
        ...theme.mixins.transition("all 0.4s ease-in-out"),
        zIndex: "2",
        background: "#ffffff",
        width: "110px",
        "&.open": {
          height: "150px",
          border: "1px solid rgba(0, 0, 0, 0.39)",
          padding: "7px 10px",
          borderRadius: "15px",
          ...theme.mixins.transition("all 0.4s ease-in-out")
        },
        "> div": {
          cursor: "pointer",
          ...theme.mixins.flexDisplay(),
          ...theme.mixins.alignItems("center"),
          backgroundSize: "contain",
          color: "#505050",
          ":not(:nth-of-type(1))": {
            marginTop: "8px"
          },
          "> .fa": {
            fontSize: "18px",
            marginRight: "10px"
          },
          "&.internet .fa": {
            color: "#0061b9"
          },
          "&.clock .fa": {
            color: "#ff6e00"
          },
          "&.reset .fa": {
            color: "#d83c3c"
          },
          "&.json .fa": {
            color: "#008000"
          }
        }
      }))()
    ),
    title: css({
      color: "#767676",
      borderBottom: "1px solid #e5e5e5",
      padding: "5px 0",
      fontSize: "12px"
    })
  };

  // utilities function
  const onChange = chaos => {
    toggleOpen(false);
    toggleChaos(chaos);
  };

  const images = [
    { name: null, icon: "fa fa-ban" },
    { name: "internet", icon: "fa fa-globe" },
    { name: "clock", icon: "fa fa-clock-o" },
    { name: "json", icon: "fa fa-file" }
  ];

  return (
    <div
      data-testid="chaosToggle"
      className="chaosToggle"
      css={classes.chaosToggle}
    >
      {/* Open the chaos options */}
      <div css={classes.trigger} onClick={() => toggleOpen(!open)} data-testid="trigger">
        <img src={active ? activeBug : bug} alt="bug" data-testid="bug" />
      </div>
      {/* List out all the chaos options */}
      <div css={classes.icons} className={`${open ? "open" : ""}`} data-testid="icons-chaos">
        <div css={classes.title}>Chaos</div>
        {images.map(image => {
          return (
            <div
              key={`${image.name || "reset"}-chaos`}
              css={classes.image}
              className={image.name || "reset"}
              data-testid={`chaos-${image.name || "stop"}`}
              onClick={() => onChange(image.name)}
            >
              <span className={image.icon} />
              {image.name || "Stop"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ChaosToggle.propTypes = propTypes;
ChaosToggle.defaultProps = defaultProps;

export default ChaosToggle;
