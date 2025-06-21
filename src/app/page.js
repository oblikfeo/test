'use client'

import { useState } from 'react'
import { tests } from '../testsData'
import Quiz from '../components/Quiz'
import styles from './page.module.css'

export default function HomePage() {
  const [testState, setTestState] = useState('welcome') // 'welcome', 'testing', 'final_results'
  const [currentTestIndex, setCurrentTestIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  const startAssessment = () => {
    setTestState('testing')
  }

  const handleTestComplete = (correctAnswersInTest) => {
    setTotalScore((prev) => prev + correctAnswersInTest)

    const nextTestIndex = currentTestIndex + 1
    if (nextTestIndex < tests.length) {
      setCurrentTestIndex(nextTestIndex)
    } else {
      setTestState('final_results')
    }
  }

  const restartAssessment = () => {
    setTestState('welcome')
    setCurrentTestIndex(0)
    setTotalScore(0)
  }

  const renderMainContent = () => {
    switch (testState) {
      case 'testing':
        const currentTest = tests[currentTestIndex]
        return (
          <Quiz
            key={currentTest.slug}
            testData={currentTest}
            onTestComplete={handleTestComplete}
            testNumber={currentTestIndex + 1}
            totalTests={tests.length}
          />
        )

      case 'final_results':
        const totalQuestions = tests.reduce(
          (acc, test) => acc + test.questions.length,
          0,
        )
        const finalPercentage = Math.round((totalScore / totalQuestions) * 100)
        let level = 'Junior'
        let levelDescription =
          'Отличное начало! Вы хорошо владеете основами. Продолжайте в том же духе, и скоро вы достигнете новых высот!'

        if (finalPercentage >= 85) {
          level = 'Senior'
          levelDescription =
            'Впечатляющий результат! Ваши знания глубоки и систематизированы. Вы — настоящий эксперт в своей области.'
        } else if (finalPercentage >= 50) {
          level = 'Middle'
          levelDescription =
            'Уверенная работа! Вы отлично справляетесь со сложными задачами и демонстрируете солидный опыт. Вы на верном пути к мастерству.'
        }

        return (
          <div className={styles.finalResultsContainer}>
            <div className={styles.finalScoreBox}>
              <h1 className={styles.finalTitle}>Тестирование завершено!</h1>
              <p className={styles.finalPercentage}>
                Ваш итоговый результат: <span>{finalPercentage}%</span>
              </p>
              <p className={styles.finalCorrectAnswers}>
                ({totalScore} из {totalQuestions} правильных ответов)
              </p>

              <div className={styles.levelIndicator}>
                <h2>
                  Ваш предполагаемый уровень: <span>{level}</span>
                </h2>
                <p>{levelDescription}</p>
              </div>

              <button
                onClick={restartAssessment}
                className={styles.restartButton}
              >
                Пройти оценку заново
              </button>
            </div>
          </div>
        )

      case 'welcome':
      default:
        return (
          <div className={styles.welcomeMessage}>
            <div className={styles.welcomeBox}>
              <h1>Оценка квалификации разработчика</h1>
              <p>
                Вам предстоит пройти серию тестов по ключевым технологиям
                веб-разработки. Тесты идут последовательно. Слева будет
                отображаться ваш прогресс. В конце вы получите итоговую оценку
                вашего уровня.
              </p>
              <button onClick={startAssessment} className={styles.startButton}>
                Начать оценку
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className={styles.appContainer}>
      {(testState === 'testing' || testState === 'final_results') && (
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Ваш путь</h2>
          <div className={styles.testList}>
            {tests.map((test, index) => {
              const isCompleted =
                index < currentTestIndex || testState === 'final_results'
              const isActive =
                index === currentTestIndex && testState === 'testing'

              let cardClass = styles.testCard
              if (isActive) cardClass += ` ${styles.active}`
              if (isCompleted) cardClass += ` ${styles.completed}`
              if (!isActive && !isCompleted) cardClass += ` ${styles.locked}`

              const cardStyle =
                isActive || isCompleted ? { background: test.gradient } : {}

              return (
                <div key={test.slug} className={cardClass} style={cardStyle}>
                  <div className={styles.cardContent}>
                    <span className={styles.cardIcon}>
                      {isCompleted ? '✓' : '●'}
                    </span>
                    <span className={styles.cardName}>{test.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      )}

      <main className={styles.mainContent}>{renderMainContent()}</main>
    </div>
  )
}
