import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="mt-10 sm:mt-28">
        <div className="sm:container">
          <div className="flex justify-center items-center">
            {/* <Image
                src="https://assets.williamsawyerr.net/images/colophon.svg"
                alt="Colophon"
                title="Colophon"
                width={48}
                height={50}
                quality={100}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIu
                MQAAKJF1kbtLA0EQhz+TaEQjEU1hYRFErVSiQtDGIsEXqEUSwahNcnkJeRx3CRJsBVtBQbTxVehf
                oK1gLQiKIoi1taKNyjmXBBLEzLKz3/52ZtidBUsorWR0mwcy2bwWmPa5l8LLbvsrDTThogNbRNHV
                +eBUiLr2+SDRYneDZq36cf9aayyuK9DQLDyhqFpeeEZ4bj2vmrwr7FJSkZjwufCAJhcUvjf1aJlf
                TU6W+dtkLRTwg6Vd2J2s4WgNKyktIywvpzeTLiiV+5gvccSzi0FZe2R2oxNgGh9uZpnEj5dhxsV7
                GWSEIdlRJ99Tyl8gJ7mKeJUiGmskSZFnQNSCVI/LmhA9LiNN0ez/377qidGRcnWHDxpfDOO9D+w7
                8LNtGF/HhvFzAtZnuMpW83NHMPYh+nZV6z0E5yZcXFe16B5cbkHXkxrRIiXJKtOSSMDbGbSFofMW
                WlbKPaucc/oIoQ35qhvYP4B+iXeu/gIEUme5uVZDHAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABRJ
                REFUGJVjZFj8gAE3YMIjN4KlAd4dAZc6urEBAAAAAElFTkSuQmCC"
                priority={true}
                className="colophon"
              /> */}
          </div>
          <div className="flex justify-center items-center">
            <span className="copyright mt-10 sm:mt-14">Copyright &copy; 2024 <strong>Spinn Creative, Ltd</strong>. All rights reserved.</span>
          </div>
        </div>
      </footer>
    );
}
