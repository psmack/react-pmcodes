import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
            <div class='social-media-wrap'>
            <small class='website-rights'>PM Codes &copy; 2022</small>
                <div class='social-icons'>
                    <Link
                    class='social-icon-link github'
                    to='/home'
                    target='_blank'
                    aria-label='GitHub'
                    >
                    <i class='fab fa-github' />
                    </Link>
                    <Link
                    class='social-icon-link linkedin'
                    to='/home'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;