import {Statement} from "./_statement";
import {verNot, str, seq, plus, IStatementRunnable} from "../combi";
import {Field, Source} from "../expressions";
import {Version} from "../../../version";

export class CatchSystemExceptions extends Statement {

  public getMatcher(): IStatementRunnable {
    const ret = seq(str("CATCH SYSTEM-EXCEPTIONS"),
                    plus(seq(new Field(), str("="), new Source())));

    return verNot(Version.Cloud, ret);
  }

}