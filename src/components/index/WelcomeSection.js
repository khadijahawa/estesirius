import { FormattedMessage } from "react-intl";

export default function WelcomeSection() {
  return (
    <div className="py-20 bg-gray-light font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-dark">
          <FormattedMessage id="WelcomeSection.welcomeTo" />{" "}
          <span className="text-primary">ESTE SIRIUS</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text-light mb-8 text-center">
            <FormattedMessage id="WelcomeSection.atESTESIRIUS" />
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-3xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-dark">
                <FormattedMessage id="WelcomeSection.expertTeam" />
              </h3>
              <p className="text-text-light">
                <FormattedMessage id="WelcomeSection.boardCertifiedSpecialists" />
              </p>
            </div>
            <div>
              <div className="bg-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-dark">
                <FormattedMessage id="WelcomeSection.advancedTechnology" />
              </h3>
              <p className="text-text-light">
                <FormattedMessage id="WelcomeSection.stateOfTheArtEquipment" />
              </p>
            </div>
            <div>
              <div className="bg-gray rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2 text-gray-dark">
                <FormattedMessage id="WelcomeSection.personalizedCare" />
              </h3>
              <p className="text-text-light">
                <FormattedMessage id="WelcomeSection.customTreatmentPlans" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
