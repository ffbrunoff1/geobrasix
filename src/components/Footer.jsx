import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Layers, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', id: 'inicio' },
        { name: 'Sobre', id: 'sobre' },
        { name: 'Serviços', id: 'servicos' },
        { name: 'Contato', id: 'contato' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Geomembranas', action: () => scrollToSection('servicos') },
        { name: 'Geotêxteis', action: () => scrollToSection('servicos') },
        { name: 'Geocélulas', action: () => scrollToSection('servicos') },
        { name: 'Drenagem', action: () => scrollToSection('servicos') }
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: '(44) 99104-0774', href: 'tel:+5544991040774', icon: Phone },
        { name: 'ffbrunoff@yahoo.com.br', href: 'mailto:ffbrunoff@yahoo.com.br', icon: Mail },
        { name: 'Padre Lebret 801 G05 Bloco 03', href: 'https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03', icon: MapPin }
      ]
    }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-geo opacity-10"></div>
      
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute top-8 right-8 bg-primary-600 hover:bg-primary-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
      >
        <ArrowUp className="h-6 w-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>

      <div className="container-width relative pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Layers className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-400 rounded-full flex items-center justify-center">
                  <Shield className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white">
                  GeoBrasix
                </span>
                <span className="text-sm font-medium text-primary-300">
                  Geossintéticos
                </span>
              </div>
            </div>

            <p className="text-secondary-300 mb-6 leading-relaxed">
              Especialistas em soluções geossintéticas para projetos de engenharia. 
              Qualidade, inovação e sustentabilidade em cada projeto.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a 
                href="tel:+5544991040774"
                className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>(44) 99104-0774</span>
              </a>
              
              <a 
                href="mailto:ffbrunoff@yahoo.com.br"
                className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>ffbrunoff@yahoo.com.br</span>
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-lg text-white mb-6">
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center space-x-2 text-secondary-300 hover:text-white transition-colors duration-300 group"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    ) : link.id ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-secondary-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform duration-300"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-secondary-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform duration-300"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-secondary-800 rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-display font-bold text-xl text-white mb-2">
                Fique por Dentro das Novidades
              </h4>
              <p className="text-secondary-300">
                Receba informações sobre novas tecnologias em geossintéticos e projetos especiais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+5544991040774"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Entrar em Contato
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('servicos')}
                className="border border-secondary-600 text-secondary-300 hover:text-white hover:border-secondary-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Ver Serviços
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © 2024 GeoBrasix. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4 text-secondary-400 text-sm">
              <span>Criado com</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="italic text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                Papum
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}