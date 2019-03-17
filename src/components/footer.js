import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
<footer class="footer">
  <div class="columns is-vcentered">
    <div class="column is-offset-7 is-4">      
      <div class="content">
        <span>
          <a id="return_to_top" href="#navbar">
            <p class="has-text-right nav-inactive">
              <i class="fas fa-angle-up"/><br/>
            </p>
            <p class="has-text-right nav-inactive">Return to top</p>
          </a>
        </span>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
