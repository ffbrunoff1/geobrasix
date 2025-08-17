import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, TrendingUp, Shield, Layers, Zap, Globe } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisão Técnica',
      description: 'Soluções desenvolvidas com rigor técnico e precisão absoluta para cada projeto específico.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade superior em todos os materiais e serviços oferecidos.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros baseados na confiança e resultados consistentes.'
    },
    {
      icon: TrendingUp,
      title: 'Inovação',
      description: 'Sempre atualizados com as mais recentes tecnologias e métodos do setor.'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Materiais Certificados',
      description: 'Todos os nossos geossintéticos atendem às normas ABNT e internacionais.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Layers,
      title: 'Soluções Integradas',
      description: 'Desde o dimensionamento até a instalação, oferecemos serviço completo.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Zap,
      title: 'Entrega Ágil',
      description: 'Processos otimizados para garantir prazos e cronogramas rigorosos.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Globe,
      title: 'Sustentabilidade',
      description: 'Soluções que promovem a conservação ambiental e uso responsável de recursos.',
      color: 'from-primary-600 to-primary-700'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projetos Executados', icon: Target },
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '50+', label: 'Clientes Ativos', icon: Users },
    { number: '98%', label: 'Satisfação Cliente', icon: TrendingUp }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
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
            <Shield className="h-4 w-4" />
            <span>Sobre a GeoBrasix</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-secondary-900 mb-6">
            Especialistas em{' '}
            <span className="gradient-text">Geossintéticos</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de 15 anos de experiência, a GeoBrasix é referência nacional em soluções 
            geossintéticas para projetos de engenharia, oferecendo qualidade técnica e inovação 
            em cada projeto executado.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-secondary-900 mb-6">
                Nossa Missão e Visão
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-secondary-100">
                  <h4 className="text-lg font-semibold text-primary-700 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Missão
                  </h4>
                  <p className="text-secondary-600">
                    Fornecer soluções técnicas em geossintéticos que garantam a durabilidade, 
                    sustentabilidade e eficiência dos projetos de engenharia civil e ambiental.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-2xl text-white">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Visão
                  </h4>
                  <p>
                    Ser a empresa líder em soluções geossintéticas no Brasil, reconhecida pela 
                    excelência técnica e compromisso com a sustentabilidade ambiental.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-display font-semibold text-secondary-900 mb-4">
                Por que escolher a GeoBrasix?
              </h4>
              <ul className="space-y-3">
                {[
                  'Equipe técnica especializada e certificada',
                  'Materiais de alta qualidade com garantia',
                  'Acompanhamento técnico completo',
                  'Prazos rigorosamente cumpridos',
                  'Suporte pós-instalação'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-secondary-600"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-secondary-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Princípios que norteiam nossa atuação e garantem a excelência em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-primary-100 to-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Números que Falam por Si
            </h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Resultados que demonstram nossa experiência e comprometimento com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}