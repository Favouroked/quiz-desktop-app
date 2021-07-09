import Link from "next/link";
import {getAll} from "../api/quiz";


function getCards(data) {
    return data.map((quiz) => (
        <div
            key={quiz.id}
            className="quiz border shadow-md p-3 flex-initial flex flex-col rounded-md space-y-3 mr-2 w-2/6"
        >
            <div className="name text-2xl">{quiz.title}</div>
            <div className="description text-sm">{quiz.description}</div>
            <div className="questions text-sm">{quiz.questions.length} questions</div>
            <div>
                <Link href={`/quiz/${quiz.id}`}>
                    <a className="start-button px-2 py-1 rounded border border-green-500">
                        Start
                    </a>
                </Link>
            </div>
        </div>
    ));
}

export default function IndexPage({quizzes}) {
    return (
        <div className="home container font-sans px-4">
            <div className="header text-3xl font-bold my-8">Quiz App</div>
            <div className="home-body flex flex-wrap">
                {getCards(quizzes)}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const quizzes = await getAll();

    return {
        props: {
            quizzes,
        }
    }
}
