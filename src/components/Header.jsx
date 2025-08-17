import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield, Layers, MapPin } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'contato', label: 'Contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'bg-primary-600' : 'bg-white'
              }`}>
                <Layers className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-primary-600'
                }`} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full flex items-center justify-center">
                <Shield className="h-2 w-2 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
                GeoBrasix
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-green-200'
              }`}>
                Geossintéticos
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+5544991040774"
              className={`btn-primary ${
                isScrolled ? '' : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Contato
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-secondary-700 hover:bg-secondary-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-secondary-200"
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="px-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+5544991040774"
                className="btn-primary w-full text-center inline-flex items-center justify-center"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Entrar em Contato
              </motion.a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}