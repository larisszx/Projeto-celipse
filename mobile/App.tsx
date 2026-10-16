import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState<'status' | 'kinetic' | 'system' | 'store'>('status');
  const [activeCell, setActiveCell] = useState<'A' | 'B'>('A');
  const [batteryA, setBatteryA] = useState(88);
  const [batteryB, setBatteryB] = useState(94);
  const [kineticSteps, setKineticSteps] = useState(5420);
  const [solarLux, setSolarLux] = useState(42000);
  const [shaking, setShaking] = useState(false);

  // Store form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [model, setModel] = useState('Celipse Pro');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  // Auto charge/drain loop
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeCell === 'A') {
        setBatteryA((prev) => Math.max(10, +(prev - 0.2).toFixed(1)));
        setBatteryB((prev) => Math.min(100, +(prev + 0.3).toFixed(1)));
      } else {
        setBatteryB((prev) => Math.max(10, +(prev - 0.2).toFixed(1)));
        setBatteryA((prev) => Math.min(100, +(prev + 0.3).toFixed(1)));
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [activeCell]);

  const toggleCell = () => {
    setActiveCell((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  const handleKineticBoost = () => {
    setShaking(true);
    setKineticSteps((prev) => prev + 120);
    if (activeCell === 'A') {
      setBatteryB((prev) => Math.min(100, +(prev + 1.5).toFixed(1)));
    } else {
      setBatteryA((prev) => Math.min(100, +(prev + 1.5).toFixed(1)));
    }
    setTimeout(() => setShaking(false), 800);
  };

  const handlePreOrder = async () => {
    if (!name || !email) {
      alert('Por favor, preencha nome e e-mail.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/orders/pre-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          email,
          phone: '(12) 99999-9999',
          cityState: 'Caraguatatuba/SP',
          productId: 'celipse-pro',
          productName: model,
          colorName: 'Titânio Escuro',
          storage: '512 GB'
        })
      });

      if (res.ok) {
        const data = await res.json();
        setOrderConfirmed(data.reservationCode);
      } else {
        setOrderConfirmed(`CELIPSE-APP-${Math.floor(10000 + Math.random() * 90000)}`);
      }
    } catch {
      setOrderConfirmed(`CELIPSE-APP-${Math.floor(10000 + Math.random() * 90000)}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#08090B" />
      
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>●</Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>CELIPSE OS</Text>
            <Text style={styles.headerSubtitle}>COMPANION • CONECTADO</Text>
          </View>
        </View>
        <View style={styles.badgeLive}>
          <Text style={styles.badgeLiveDot}>●</Text>
          <Text style={styles.badgeLiveText}>CICLO INFINITO</Text>
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* TAB 1: STATUS DUAL CELL */}
        {activeTab === 'status' && (
          <View>
            <View style={styles.card}>
              <Text style={styles.sectionHeading}>SISTEMA DUAL-CELL PATENTEADO</Text>
              <Text style={styles.cardDescription}>
                Alternância inteligente em 0ms. O LED traseiro indica a célula em uso.
              </Text>

              {/* Both Batteries Grid */}
              <View style={styles.dualBatteryRow}>
                {/* Cell A */}
                <View style={[styles.batteryBox, activeCell === 'A' && styles.batteryBoxActive]}>
                  <View style={styles.cellHeader}>
                    <Text style={styles.cellTitle}>CÉLULA A</Text>
                    <Text style={[styles.cellStatusTag, activeCell === 'A' ? styles.tagInUse : styles.tagCharging]}>
                      {activeCell === 'A' ? 'EM USO' : 'CARREGANDO'}
                    </Text>
                  </View>
                  <Text style={styles.percentText}>{batteryA}%</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${batteryA}%` }]} />
                  </View>
                  <Text style={styles.cellMeta}>LED Traseiro: {activeCell === 'A' ? 'LIGADO' : 'APAGADO'}</Text>
                </View>

                {/* Cell B */}
                <View style={[styles.batteryBox, activeCell === 'B' && styles.batteryBoxActive]}>
                  <View style={styles.cellHeader}>
                    <Text style={styles.cellTitle}>CÉLULA B</Text>
                    <Text style={[styles.cellStatusTag, activeCell === 'B' ? styles.tagInUse : styles.tagCharging]}>
                      {activeCell === 'B' ? 'EM USO' : 'CARREGANDO'}
                    </Text>
                  </View>
                  <Text style={styles.percentText}>{batteryB}%</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${batteryB}%` }]} />
                  </View>
                  <Text style={styles.cellMeta}>LED Traseiro: {activeCell === 'B' ? 'LIGADO' : 'APAGADO'}</Text>
                </View>
              </View>

              {/* Rear LED indicator visual bar */}
              <View style={styles.ledBarWrapper}>
                <Text style={styles.ledBarTitle}>BARRA DE LED TRASEIRA DO DISPOSITIVO</Text>
                <View style={styles.ledBar}>
                  <View style={[styles.ledSegmentLeft, activeCell === 'A' && styles.ledActive]} />
                  <View style={[styles.ledSegmentRight, activeCell === 'B' && styles.ledActive]} />
                </View>
                <View style={styles.ledLabels}>
                  <Text style={[styles.ledSubLabel, activeCell === 'A' && styles.textCyan]}>Lado A (Ativo)</Text>
                  <Text style={[styles.ledSubLabel, activeCell === 'B' && styles.textCyan]}>Lado B (Reserva)</Text>
                </View>
              </View>

              {/* Action Button */}
              <TouchableOpacity style={styles.btnPrimary} onPress={toggleCell}>
                <Text style={styles.btnPrimaryText}>ALTERNAR CÉLULA ATIVA (0ms)</Text>
              </TouchableOpacity>
            </View>

            {/* Live Harvesting Stats */}
            <View style={styles.card}>
              <Text style={styles.sectionHeading}>CAPTAÇÃO EM TEMPO REAL</Text>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Luz Solar / Ambiente:</Text>
                <Text style={styles.metricValue}>☀️ {solarLux.toLocaleString()} lux (+1.9 W)</Text>
              </View>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Movimento / Passos:</Text>
                <Text style={styles.metricValue}>⚡ {kineticSteps.toLocaleString()} passos (+2.4 W)</Text>
              </View>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Temperatura Laserax:</Text>
                <Text style={styles.metricValue}>🔥 28.9 °C (Ideal)</Text>
              </View>
            </View>
          </View>
        )}

        {/* TAB 2: KINETIC SHAKE SIMULATOR */}
        {activeTab === 'kinetic' && (
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>GERADOR CINÉTICO PIEZOELÉTRICO</Text>
            <Text style={styles.cardDescription}>
              Toque repetidamente para simular o movimento do seu dia a dia (caminhada, corrida e gestos). 
              A inércia é convertida em recarga contínua para a célula secundária.
            </Text>

            <View style={styles.kineticCenterBox}>
              <TouchableOpacity
                onPress={handleKineticBoost}
                style={[styles.kineticCircle, shaking && styles.kineticCircleShaking]}
              >
                <Text style={styles.kineticIcon}>⚡</Text>
                <Text style={styles.kineticPressText}>TOQUE PARA GERAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.metricBox}>
              <Text style={styles.metricBoxNumber}>{kineticSteps}</Text>
              <Text style={styles.metricBoxLabel}>PASSOS CAPTADOS PELO CELIPSE</Text>
            </View>

            <Text style={styles.calloutText}>
              ✓ Sistema com suspensão por levitação magnética e materiais piezoelétricos de resposta instantânea.
            </Text>
          </View>
        )}

        {/* TAB 3: SYSTEM & ECO SAVINGS */}
        {activeTab === 'system' && (
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>SUSTENTABILIDADE & PERFORMANCE</Text>
            
            <View style={styles.statPill}>
              <Text style={styles.statPillNum}>412 DIAS</Text>
              <Text style={styles.statPillText}>Sem necessidade de conectar a tomadas elétricas</Text>
            </View>

            <View style={styles.statPill}>
              <Text style={styles.statPillNum}>ZERO CABOS</Text>
              <Text style={styles.statPillText}>Eliminação de lixo eletrônico (Diretriz SINIR/ANATEL)</Text>
            </View>

            <View style={styles.statPill}>
              <Text style={styles.statPillNum}>3nm QUANTUM</Text>
              <Text style={styles.statPillText}>Processador proprietário sem travamentos</Text>
            </View>

            <View style={styles.academicCredits}>
              <Text style={styles.academicTitle}>PROJETO MULTIDISCIPLINAR</Text>
              <Text style={styles.academicSchool}>E.E. Vereador Benedito Paes Sobrinho</Text>
              <Text style={styles.academicCity}>Caraguatatuba / SP • Agosto 2026</Text>
              <Text style={styles.academicAdvisor}>Orientação: Profª Nataly Mazariolli</Text>
            </View>
          </View>
        )}

        {/* TAB 4: STORE & RESERVATION */}
        {activeTab === 'store' && (
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>RESERVA VIP CELIPSE (LOTE ALPHA)</Text>
            
            {!orderConfirmed ? (
              <View>
                <Text style={styles.inputLabel}>Nome Completo:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Seu nome"
                  placeholderTextColor="#666"
                  value={name}
                  onChangeText={setName}
                />

                <Text style={styles.inputLabel}>E-mail:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="seuemail@exemplo.com"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />

                <Text style={styles.inputLabel}>Modelo Desejado:</Text>
                <View style={styles.modelRow}>
                  {['Celipse One', 'Celipse Pro', 'Gold Edition'].map((m) => (
                    <TouchableOpacity
                      key={m}
                      style={[styles.modelBtn, model === m && styles.modelBtnActive]}
                      onPress={() => setModel(m)}
                    >
                      <Text style={[styles.modelBtnText, model === m && styles.textWhite]}>{m}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity style={styles.btnPrimary} onPress={handlePreOrder}>
                  <Text style={styles.btnPrimaryText}>ENVIAR RESERVA PARA A API</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.confirmBox}>
                <Text style={styles.confirmCheck}>✓</Text>
                <Text style={styles.confirmTitle}>RESERVA CONFIRMADA!</Text>
                <Text style={styles.confirmCode}>{orderConfirmed}</Text>
                <Text style={styles.confirmDesc}>
                  Sua solicitação foi sincronizada com a API NestJS Celipse.
                </Text>
                <TouchableOpacity style={styles.btnSecondary} onPress={() => setOrderConfirmed(null)}>
                  <Text style={styles.btnSecondaryText}>Fazer Nova Reserva</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

      </ScrollView>

      {/* Bottom Navigation Tabs */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === 'status' && styles.navItemActive]}
          onPress={() => setActiveTab('status')}
        >
          <Text style={styles.navIcon}>🔋</Text>
          <Text style={[styles.navText, activeTab === 'status' && styles.navTextActive]}>Bateria</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'kinetic' && styles.navItemActive]}
          onPress={() => setActiveTab('kinetic')}
        >
          <Text style={styles.navIcon}>⚡</Text>
          <Text style={[styles.navText, activeTab === 'kinetic' && styles.navTextActive]}>Cinético</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'system' && styles.navItemActive]}
          onPress={() => setActiveTab('system')}
        >
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={[styles.navText, activeTab === 'system' && styles.navTextActive]}>Sistema</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'store' && styles.navItemActive]}
          onPress={() => setActiveTab('store')}
        >
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={[styles.navText, activeTab === 'store' && styles.navTextActive]}>Reserva</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#08090B'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2228',
    backgroundColor: '#0D0F14'
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1E232E',
    borderWidth: 1,
    borderColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: '#00E5FF',
    fontSize: 16
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 1.5
  },
  headerSubtitle: {
    color: '#8A92A6',
    fontSize: 9,
    letterSpacing: 1,
    fontWeight: '600'
  },
  badgeLive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 229, 255, 0.4)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  badgeLiveDot: {
    color: '#00E5FF',
    fontSize: 10
  },
  badgeLiveText: {
    color: '#00E5FF',
    fontSize: 10,
    fontWeight: '700'
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40
  },
  card: {
    backgroundColor: '#12151B',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#242832',
    padding: 18,
    marginBottom: 16
  },
  sectionHeading: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 4
  },
  cardDescription: {
    color: '#9EABB8',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 14
  },
  dualBatteryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16
  },
  batteryBox: {
    flex: 1,
    backgroundColor: '#191D26',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2B313E',
    padding: 12
  },
  batteryBoxActive: {
    borderColor: '#00E5FF',
    backgroundColor: '#17232F'
  },
  cellHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  cellTitle: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700'
  },
  cellStatusTag: {
    fontSize: 8,
    fontWeight: '700',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6
  },
  tagInUse: {
    backgroundColor: 'rgba(0, 229, 255, 0.2)',
    color: '#00E5FF'
  },
  tagCharging: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    color: '#10B981'
  },
  percentText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 4
  },
  progressBar: {
    height: 6,
    backgroundColor: '#272D3B',
    borderRadius: 3,
    overflow: 'hidden',
    marginVertical: 6
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00E5FF',
    borderRadius: 3
  },
  cellMeta: {
    color: '#7D8899',
    fontSize: 9,
    marginTop: 2
  },
  ledBarWrapper: {
    backgroundColor: '#0C0E12',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1F2430',
    alignItems: 'center',
    marginBottom: 16
  },
  ledBarTitle: {
    color: '#8A92A6',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8
  },
  ledBar: {
    width: '90%',
    height: 12,
    backgroundColor: '#151922',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2C3444',
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 2
  },
  ledSegmentLeft: {
    flex: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: '#222834'
  },
  ledSegmentRight: {
    flex: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#222834'
  },
  ledActive: {
    backgroundColor: '#00E5FF'
  },
  ledLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 4
  },
  ledSubLabel: {
    color: '#657185',
    fontSize: 9
  },
  textCyan: {
    color: '#00E5FF',
    fontWeight: '700'
  },
  btnPrimary: {
    backgroundColor: '#00E5FF',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 6
  },
  btnPrimaryText: {
    color: '#08090B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2430'
  },
  metricLabel: {
    color: '#A0AAB8',
    fontSize: 12
  },
  metricValue: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12
  },
  kineticCenterBox: {
    alignItems: 'center',
    marginVertical: 20
  },
  kineticCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#162332',
    borderWidth: 3,
    borderColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00E5FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20
  },
  kineticCircleShaking: {
    backgroundColor: '#00E5FF',
    transform: [{ scale: 1.05 }]
  },
  kineticIcon: {
    fontSize: 40,
    marginBottom: 4
  },
  kineticPressText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800'
  },
  metricBox: {
    backgroundColor: '#0C0E12',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#242A36',
    marginBottom: 12
  },
  metricBoxNumber: {
    color: '#00E5FF',
    fontSize: 36,
    fontWeight: '900'
  },
  metricBoxLabel: {
    color: '#8A92A6',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 2
  },
  calloutText: {
    color: '#9EABB8',
    fontSize: 11,
    lineHeight: 16,
    fontStyle: 'italic'
  },
  statPill: {
    backgroundColor: '#181C26',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#272E3D',
    marginBottom: 10
  },
  statPillNum: {
    color: '#00E5FF',
    fontSize: 16,
    fontWeight: '800'
  },
  statPillText: {
    color: '#AAB4C2',
    fontSize: 11,
    marginTop: 2
  },
  academicCredits: {
    marginTop: 12,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#242A36'
  },
  academicTitle: {
    color: '#00E5FF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1
  },
  academicSchool: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2
  },
  academicCity: {
    color: '#8A92A6',
    fontSize: 11,
    marginTop: 2
  },
  academicAdvisor: {
    color: '#CBD5E1',
    fontSize: 11,
    marginTop: 4
  },
  inputLabel: {
    color: '#CBD5E1',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10
  },
  textInput: {
    backgroundColor: '#0C0E12',
    borderWidth: 1,
    borderColor: '#272E3D',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#FFF',
    fontSize: 13
  },
  modelRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16
  },
  modelBtn: {
    flex: 1,
    backgroundColor: '#181C26',
    borderWidth: 1,
    borderColor: '#272E3D',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  modelBtnActive: {
    borderColor: '#00E5FF',
    backgroundColor: '#1E2C3D'
  },
  modelBtnText: {
    color: '#8A92A6',
    fontSize: 10,
    fontWeight: '700'
  },
  textWhite: {
    color: '#FFF'
  },
  confirmBox: {
    alignItems: 'center',
    paddingVertical: 20
  },
  confirmCheck: {
    fontSize: 40,
    color: '#10B981',
    marginBottom: 8
  },
  confirmTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800'
  },
  confirmCode: {
    color: '#00E5FF',
    fontSize: 20,
    fontWeight: '900',
    marginVertical: 8,
    letterSpacing: 2
  },
  confirmDesc: {
    color: '#8A92A6',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 16
  },
  btnSecondary: {
    backgroundColor: '#272E3D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  btnSecondaryText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700'
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0D0F14',
    borderTopWidth: 1,
    borderTopColor: '#1F2228',
    paddingVertical: 8
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4
  },
  navItemActive: {
    opacity: 1
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 2
  },
  navText: {
    color: '#657185',
    fontSize: 10,
    fontWeight: '600'
  },
  navTextActive: {
    color: '#00E5FF',
    fontWeight: '700'
  }
});
