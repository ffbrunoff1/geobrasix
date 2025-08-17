import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Layers, Droplets, Mountain, Road, Factory, ArrowRight, CheckCircle, Phone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Geomembranas',
      description: 'Impermeabilização para lagoas, aterros sanitários e reservatórios',
      features: ['PEAD', 'PVC', 'EPDM', 'Instalação técnica'],
      color: 'from-primary-500 to-primary-600',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'Geotêxteis',
      description: 'Separação, filtração e reforço em obras de infraestrutura',
      features: ['Tecidos', 'Não-tecidos', 'Drenagem', 'Proteção'],
      color: 'from-accent-500 to-accent-600',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop'
    },
    {
      icon: Mountain,
      title: 'Geocélulas',
      description: 'Contenção de taludes e estabilização de terrenos',
      features: ['Polietileno', 'Instalação rápida', 'Alta resistência', 'Sustentável'],
      color: 'from-secondary-500 to-secondary-600',
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=300&fit=crop'
    },
    {
      icon: Road,
      title: 'Pavimentação',
      description: 'Soluções para estradas, pistas e áreas de tráfego pesado',
      features: ['Geogrelhas', 'Reforço', 'Pavimentos', 'Consultoria'],
      color: 'from-primary-600 to-primary-700',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=300&fit=crop'
    },
    {
      icon: Droplets,
      title: 'Drenagem',
      description: 'Sistemas de drenagem e controle de águas pluviais',
      features: ['Geodrenos', 'Tubos perfurados', 'Filtros', 'Projeto técnico'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop'
    },
    {
      icon: Factory,
      title: 'Mineração',
      description: 'Soluções especializadas para a indústria mineral',
      features: ['Barragens de rejeito', 'Impermeabilização', 'Contenção', 'Monitoramento'],
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    }
  ]

  const applications = [
    'Aterros Sanitários',
    'Barragens e Reservatórios',
    'Estradas e Rodovias',
    'Contenção de Taludes',
    'Drenagem Urbana',
    'Obras Portuárias',
    'Mineração',
    'Agricultura'
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-geo opacity-5"></div>
      
      <div className="container-width relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Layers className="h-4 w-4" />
            <span>Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Soluções Completas em{' '}
            <span className="gradient-text">Geossintéticos</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de produtos e serviços especializados para atender 
            às necessidades específicas de cada projeto de engenharia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group card-hover border border-secondary-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-secondary-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Applications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-8 lg:p-12 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-6">
                Áreas de Aplicação
              </h3>
              
              <p className="text-secondary-300 mb-8 leading-relaxed">
                Nossos geossintéticos são aplicados em diversos segmentos da engenharia civil, 
                proporcionando soluções eficientes e sustentáveis para os mais variados projetos.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white text-secondary-900 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-all duration-300 shadow-lg flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Falar com Especialista
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-white font-medium">{app}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-secondary-900 mb-6">
            Como Trabalhamos
          </h3>
          
          <p className="text-secondary-600 max-w-3xl mx-auto mb-12">
            Nosso processo é estruturado para garantir a máxima eficiência e qualidade 
            em cada etapa do seu projeto.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análise', desc: 'Avaliação técnica do projeto' },
              { step: '02', title: 'Projeto', desc: 'Desenvolvimento da solução' },
              { step: '03', title: 'Fornecimento', desc: 'Entrega dos materiais' },
              { step: '04', title: 'Instalação', desc: 'Execução profissional' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}