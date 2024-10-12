"use client"
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  const buttonHandler = () => {
    console.log('it\'s working')
  }

  return (
    <header className="flex justify-between px-2 fixed right-0 left-0 top-0 pt-2  z-50 bg-[#F2F2F2]">
      <h1 className="text-3xl">
        <Link href={"/"}>
          <span className="text-orange-400">Tasty-</span>Cook.
        </Link>
      </h1>

      <ul className="hidden">
        <li>Home </li>
        <li>About Us </li>
        <li>Recipes </li>
        <li>Blogs </li>
      </ul>

      <div>
        <Button onClick={buttonHandler}>Lastest Recipe</Button>
      </div>
    </header>
  );
}

export default Header
