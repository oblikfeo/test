'use client'
import { useState } from 'react'
import styles from '../app/page.module.css'

export default function Quiz({
  testData,
  onTestComplete,
  testNumber,
  totalTests,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { [questionIndex]: { answer, isCorrect } }
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const { name, questions, gradient } = testData
  const question = questions[currentQuestion]

  const handleAnswer = (answer, index) => {
    // Для fill-blank тип всегда 'fill-blank' а не индекс
    const isCorrect =
      question.type === 'fill-blank'
        ? answer.toLowerCase().trim() ===
          question.correctAnswer.toLowerCase().trim()
        : answer === question.correctAnswer

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion]: { answer, isCorrect },
    }))

    if (question.type === 'multiple-choice') {
      setSelectedOption({ index, isCorrect })
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
      } else {
        setShowResults(true)
      }
    }, 1200)
  }

  const completeTest = () => {
    const correctCount = Object.values(userAnswers).filter(
      (a) => a.isCorrect,
    ).length
    onTestComplete(correctCount)
  }

  const renderQuestion = () => {
    const progress = ((currentQuestion + 1) / questions.length) * 100
    return (
      <>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%`, background: gradient }}
          ></div>
        </div>
        {(() => {
          switch (question.type) {
            case 'multiple-choice':
              return (
                <div className={styles.questionContainer}>
                  <h3>{question.question}</h3>
                  {question.code && (
                    <pre className={styles.codeBlock}>{question.code}</pre>
                  )}
                  <div className={styles.options}>
                    {question.options.map((option, index) => {
                      let optionClass = styles.option
                      if (selectedOption && selectedOption.index === index) {
                        optionClass += selectedOption.isCorrect
                          ? ` ${styles.correct}`
                          : ` ${styles.incorrect}`
                      }
                      return (
                        <button
                          key={index}
                          className={optionClass}
                          onClick={() => handleAnswer(index, index)}
                          disabled={!!selectedOption}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            case 'fill-blank':
              const escapedCode = question.code
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
              return (
                <div className={styles.questionContainer}>
                  <h3>{question.question}</h3>
                  <pre
                    className={styles.codeBlock}
                    dangerouslySetInnerHTML={{
                      __html: escapedCode.replace(
                        '___',
                        '<span class="blank-space">___</span>',
                      ),
                    }}
                  />
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const answer = e.target.elements.answer.value
                      if (answer) handleAnswer(answer)
                    }}
                  >
                    <input
                      type="text"
                      name="answer"
                      placeholder="Введите ответ..."
                      className={styles.textInput}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className={styles.navButton}
                      style={{ marginTop: '15px' }}
                    >
                      Ответить
                    </button>
                  </form>
                </div>
              )
            default:
              return null
          }
        })()}
      </>
    )
  }

  const renderResults = () => {
    const correctCount = Object.values(userAnswers).filter(
      (a) => a.isCorrect,
    ).length
    const score = Math.round((correctCount / questions.length) * 100)

    return (
      <div className={styles.resultsContainer}>
        <div className={styles.score} style={{ background: gradient }}>
          <h2>Результаты теста «{name}»</h2>
          <h3>Ваш результат: {score}%</h3>
          <p>
            ({correctCount} из {questions.length} правильных ответов)
          </p>
        </div>

        <div className={styles.answersReview}>
          <h3>Разбор ответов:</h3>
          {questions.map((q, index) => {
            const userAnswer = userAnswers[index]
            const isCorrect = userAnswer?.isCorrect
            let correctAnswerText = q.correctAnswer
            if (
              q.type === 'multiple-choice' &&
              typeof q.correctAnswer === 'number'
            ) {
              correctAnswerText = q.options[q.correctAnswer]
            }

            return (
              <details key={index} className={styles.answerItem}>
                <summary
                  className={`${styles.answerSummary} ${isCorrect ? styles.summaryCorrect : styles.summaryIncorrect}`}
                >
                  <span>
                    Вопрос {index + 1}: {q.question}
                  </span>
                  <span className={styles.resultIcon}>
                    {isCorrect ? '✅' : '❌'}
                  </span>
                </summary>
                <div className={styles.answerDetails}>
                  <p>
                    <strong>Ваш ответ:</strong>{' '}
                    {userAnswer
                      ? q.type === 'multiple-choice'
                        ? q.options[userAnswer.answer]
                        : userAnswer.answer
                      : 'Не отвечено'}
                  </p>
                  {!isCorrect && (
                    <p>
                      <strong>Правильный ответ:</strong> {correctAnswerText}
                    </p>
                  )}
                  <p>
                    <strong>Пояснение:</strong> {q.explanation}
                  </p>
                </div>
              </details>
            )
          })}
        </div>

        <div className={styles.resultsNavigation}>
          <button onClick={completeTest} className={styles.navButton}>
            {testNumber === totalTests
              ? 'Завершить и посмотреть итог'
              : 'Следующий тест'}{' '}
            &rarr;
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.quizContainer}>
      <header className={styles.header} style={{ background: gradient }}>
        <h1>{name}</h1>
        <p>
          Тест {testNumber} из {totalTests} &bull; Вопрос {currentQuestion + 1}{' '}
          из {questions.length}
        </p>
      </header>

      <main className={styles.main}>
        {showResults ? renderResults() : renderQuestion()}
      </main>
    </div>
  )
}
